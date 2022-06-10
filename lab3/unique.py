data = [1, 1, 5, 1, 9, 2, 2, 2, 2, 2, 54, 5, 6, 3]
data1 = ['a','v', 'A', 'B', 'b']

class SimpleIterator:
    def __init__(self, items, **kwargs):
        self.items = items
        self.counter = 0
        self.myLits = list()
        if 'ignore_case' in kwargs:
            if (kwargs['ignore_case']):
                self.items = [item.lower() for item in self.items]
        seen = {}
        self.new_list = [seen.setdefault(x, x) for x in self.items if x not in seen]
        self.limit = len(self.new_list)

    def __iter__(self):
        return self


    def __next__(self):
        if  self.counter < self.limit:
            self.counter += 1
            return self.new_list[self.counter - 1]
        else:
            raise StopIteration

s_iter2 = SimpleIterator(data1, ignore_case=False)
s_iter1 = SimpleIterator(data1, ignore_case=True)
for i in s_iter2:
    print(i)
print ()
for i in s_iter1:
    print(i)