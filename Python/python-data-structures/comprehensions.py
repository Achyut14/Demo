

# nums = [1,2,3,4,5,6,7,8,9,10,20]
# # evens =[]
# # for num in nums:
# #     if num % 2 ==0:
# #         evens.append(num)
# # print(evens)

# # evens = [num for num in nums if num % 2==0]


# [num *2 for num in nums]
# ['HIIII' for num in nums]

# # [What_to_append for thinh in list]

# ###Another Example
# # [n * n for n in [2,4,6,8]]


# [char.upper()+ '.'for char in 'achyut']


# [num/2 for num in range(10,20)]

####Making a board
# def gen_board(size, initial_val=None):
#     return [[initial_val for x in range(size)] for y in range(size)]





# chickens = [ 
#     {"name": 'Gobinda', "sex": 'Rooseter'},
#     {"name": 'Hem', "sex": 'Hen'},
#     {"name": 'Totadri', "sex": 'Rooseter'},
#     {"name": 'lalit', "sex": 'Hen'},
#     {"name": 'Gagan', "sex": 'Rooseter'},
# ]
# hens =[bird["name"] for bird in chickens if bird["sex"]=='Hen']




scores = [55, 89, 99, 87, 60, 70, 74, 76, 90, 50, 82]
grades = ['PASS' if score >= 70 else "FAIL" for score in scores]





