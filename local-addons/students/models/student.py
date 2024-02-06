from odoo import api, fields, models


class Student(models.Model):
    _name ='school.student' # school_student in postgres
    _description = 'Students Records '
    
    @api.model
    def _get_gender_list(self):
        return [('male', 'Male'), ('female', 'Female'), ('others', 'Others')]

    name = fields.Char('Full Name', required=True, help='Enter your fullname.', index=True)
    address = fields.Text('Address')
    contact_number = fields.Char('Contact Number', size=10)
    message = fields.Html('Message')
    gender = fields.Selection(_get_gender_list, 'Gender')
    age = fields.Integer('Age')
    is_disable = fields.Boolean('Is Disable?', default=False)
    hobby = fields.Text('Hobby')
    school_name = fields.Char('School Name')
    school_address = fields.Char('School Address')
    class_name = fields.Char('Class')
