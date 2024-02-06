from odoo import models, fields


class CRM(models.Model):
    _inherit = "crm.lead"
    
    category = fields.Char(string="Category")
    industry_id = fields.Many2one(
        string="Industry Type",
        comodel_name="crm.industry",
    )

    # def write(self, values):
    #     pass