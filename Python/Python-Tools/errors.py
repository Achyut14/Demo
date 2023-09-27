
# #this will get errors
# def get_days_alive(person):
#     days = person['age'] * 365
#     print(f'You have been alive for {days} days')

# #trying to fix error
# def get_days_alive(person):
#     try:
#         days = person['age'] * 365
#         print(f'{person["name"]}You have been alive for {days} days')
#     except KeyError as exe:
#         print (f"Missing Key: {exe}")
#     except TypeError:
#         print("person to be dicts")

#Raising Errors

def bounded_avg(nums):
    "Return avg of nums (makes sure nums are 1-100)"
    for n in nums:
    if n < 1 or n >100:
        raise ValueError("Outside bound of 1-100")
    return sum(nums) / len(nums)

def handle_data():
    "process data from database"
    #ages=get_ages(from_my_db)
    ages =[10,40,50,99,103,2,0]

    try:
        ave = bounded_avg(ages)
        print("Average was", avg)
    
    except ValueError as exe:
        #exe is exception abject -- you can examine it
        print("Invalid age in list of ages")







