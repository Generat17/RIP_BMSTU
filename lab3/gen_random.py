import random

random.seed(version=2)
def gen_random(num_count, begin, end):
    rand_list = list()
    for x in range(num_count):
    	rand_list.append(random.randint(begin, end))
    return rand_list

print (gen_random(10, 200, 300))

