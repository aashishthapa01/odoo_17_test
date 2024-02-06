/** @odoo-module **/
import { patch } from "@web/core/utils/patch"
import { DateTimeField } from "@web/views/fields/datetime/datetime_field"
import { loadCSS, loadJS } from "@web/core/assets"
import { useRef, useEffect, onWillStart, onMounted } from "@odoo/owl"
import { formatDate, formatDateTime } from "@web/core/l10n/dates"
const { DateTime } = luxon

patch(DateTimeField.prototype, {
  // Define the patched method here
  setup() {
    super.setup()
    this.bs_date = useRef("nepali_date")
    this.ad_date = useRef("start-date")

    onWillStart(() => {
      loadCSS(
        "nepali_date_custom/static/lib/nepali_date_picker/css/nepali.datepicker.v4.0.1.min.css"
      )
    })

    useEffect(
      () => {
        const value = this.values[0]
        if (!value) {
          return
        }
        let nepali_timezone = Intl.DateTimeFormat("en-NP", {
          timeZone: "Asia/kathmandu",
        })

        if (this.bs_date.el)
          this.bs_date.el.value = NepaliFunctions.AD2BS(
            nepali_timezone.format(new Date(value)),
            "MM/DD/YYYY"
          )
      },
      () => [this.state.value]
    )

    onMounted(() => {
      this.bs_date.el?.nepaliDatePicker({
        closeOnDateSelect: true,
        onChange: this._onBSChange.bind(this),
      })
      if (this.ad_date.el) this.ad_date.el.style["display"] = "none"
    })
  },

  _onBSChange(ev) {
    console.log(ev.ad)
    console.log(this.state.value)
    this.state.value = DateTime.fromJSDate(new Date(Date.parse(ev.ad)))
    let toUpdate = {}
    toUpdate[this.props.name] = this.state.value
    this.props.record.update(toUpdate)
  },
  _onADChange(ev) {
    console.log(ev.target.value)
  },

  switch_calendar() {
    if (this.bs_date.el.style["display"] == "none") {
      this.bs_date.el.style["display"] = "block"
      this.ad_date.el.style["display"] = "none"
    } else {
      this.bs_date.el.style["display"] = "none"
      this.ad_date.el.style["display"] = "block"
    }
  },
  getFormattedValue(valueIndex) {
    const value = this.values[valueIndex]
    return value
      ? this.field.type === "date"
        ? formatDate(value) +
          "(" +
          NepaliFunctions.AD2BS(new Date(value).toISOString().split("T")[0]) +
          ")"
        : formatDateTime(value) +
          "(" +
          NepaliFunctions.AD2BS(new Date(value).toISOString().split("T")[0]) +
          ")"
      : ""
  },
})
