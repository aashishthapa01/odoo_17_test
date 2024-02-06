{
    'name': "Student Management System",
    'version': '1.0',
    'depends': ['base'],
    'author': "Aashish Thapa",
    'category': 'Education',
    'description': """
    School Management System.
    """,
    # data files always loaded at installation
    'data': [
        'security/security.xml',
        'security/ir.model.access.csv',
        'views/student.xml',
        'views/menu.xml',
    ],
}