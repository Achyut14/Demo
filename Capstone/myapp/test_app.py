import unittest
from app import create_app
from models import db
import os

class FlaskTestCase(unittest.TestCase):
    def setUp(self):
        """Prepare each test environment."""
        # Make sure to load environment variables at the beginning of your script
        # if using Flask's built-in method to load or manually with os.getenv()
        database_url = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
        
        test_config = {
            'TESTING': True,
            'SQLALCHEMY_DATABASE_URI': database_url,
            'WTF_CSRF_ENABLED': False
        }
        self.app = create_app(test_config)
        self.client = self.app.test_client()

        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_home_page(self):
        """Test the home page access."""
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_create_account_page(self):
        """Test the create account page GET method."""
        response = self.client.get('/create/account')
        self.assertEqual(response.status_code, 200)

    def test_login_page(self):
        """Test the login page GET method."""
        response = self.client.get('/login')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
