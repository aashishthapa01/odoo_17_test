#!/bin/bash

# Your module upgrade command
odoo -c /etc/odoo/odoo.conf -d postgres -u classroom
# Execute the original entrypoint script to start Odoo
exec /entrypoint.sh "$@"
