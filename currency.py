def special_format(n):
    n = n.replace(',', '')
    s, *d = str(n).partition(".")
    r = ",".join([s[x-2:x] for x in range(-3, -len(s), -2)][::-1] + [s[-3:]])
    return "".join([r] + d)


number = "1,000,000.0080000"
print(special_format(number))