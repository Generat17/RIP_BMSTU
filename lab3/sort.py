data = [4, -30, 100, -100, 123, 1, 0, -1, -4]


def MySort(d):
    result = sorted(d, key=abs, reverse=True)
    return(result)

def MySortLambda(d):
    result_with_lambda = sorted(d, key=lambda v: -v if v < 0 else v, reverse=True)
    return(result_with_lambda)

print (MySort(data))