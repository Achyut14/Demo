
from unittest import TestCase
from algorithms import reverse_str, is_Palindrome, factorial

class AlgorithmsTestCase(TestCase):
    def test_reverse(self):
        self.assertEqual(reverse_str('hello'), 'olleh')

    def test_is_Palindrome(self):
        self.assertTrue(is_Palindrome('racecar'))

    def test_factorial(self):
        self.assertEqual(factorial(5), 120)
        self.assertRaises(ValueError, factorial, -5)