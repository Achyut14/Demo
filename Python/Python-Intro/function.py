
def greet(person):
    return f"Hello there, {person}"



def divide(a, b):
    if type(a) is int and type (b) is int:
        return a/b
    return 'a and b must be integers'


def send_email(to_email, from_email, subject, body):
    email=f"""
        to: {to_email}
        from: {from_email}
        subject: {subject}
        --------------
         body: {body}
    """
    
    print(email)

send_email(subject="MEOw", to_email="Blue@gamil.com",
from_email= "me@humans.com", body="Hi Blue Cat")