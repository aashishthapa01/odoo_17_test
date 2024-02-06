from odoo import http


class MyController(http.Controller):
    @http.route('/api/hello/', auth='public', methods=['GET'])
    def get_my_model(self, **kwargs):
        return 'hello world'