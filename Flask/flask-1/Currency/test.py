import unittest
from unittest.mock import patch
from app import app

class TestCurrencyConverter(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_index(self):
        response = self.app.get('/')
        self.assertIn(b'Currency Converter', response.data)

    def test_valid_conversion(self):
        with patch('app.requests.get') as mock_get:
            mock_get.return_value.status_code = 200
            mock_get.return_value.json.return_value = {
                "success": True,
                "rates": {
                    "EUR": 0.85
                }
            }
            response = self.app.post('/', data={
                'search_currency': 'USD',
                'target_currency': 'EUR',
                'amount': '100'
            })
            self.assertIn(b'Conversion Result:', response.data)
            self.assertIn(b'EUR', response.data)
            self.assertNotIn(b'0.00', response.data)

    def test_invalid_currency(self):
        response = self.app.post('/', data={
            'search_currency': 'XYZ',  # Invalid currency code
            'target_currency': 'EUR',
            'amount': '100'
        })
        self.assertIn(b'Error: Target currency not found in rates', response.data)

    def test_api_failure(self):
        with patch('app.requests.get') as mock_get:
            mock_get.return_value.status_code = 500
            response = self.app.post('/', data={
                'search_currency': 'USD',
                'target_currency': 'EUR',
                'amount': '100'
            })
            self.assertIn(b'Error: API request unsuccessful', response.data)

if __name__ == '__main__':
    unittest.main()
