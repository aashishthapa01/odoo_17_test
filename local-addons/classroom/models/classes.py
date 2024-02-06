from odoo import api, fields, models


class Classes(models.Model):
    _name ='school.classes' # school_student in postgres
    _description = 'Class Records '
    
    name = fields.Char('Class Name', required=True, help='Enter classname.', index=True)
    school = fields.Char('School')
    is_active = fields.Boolean('Is Active?', default=True)
    class_teacher = fields.Char('Class Teacher', help="Enter class teacher.")