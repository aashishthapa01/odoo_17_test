from odoo import models, fields


class Industry(models.Model):
    _name = 'crm.industry'
    
    name = fields.Char(string="name")