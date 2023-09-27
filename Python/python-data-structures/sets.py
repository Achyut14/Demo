####Making Sets

# languages = {'ruby', 'python', 'javascript'}


##### Set Operations
lemon = {'sour', 'yellow', 'fruit', 'bumpy'}
banana = {'fruit', 'smooth', 'sweet', 'yellow'}
orange = ['fruit', 'bumpy', 'orange', 'sweet']

for adj in banana | lemon | set(orange):
    print(adj)