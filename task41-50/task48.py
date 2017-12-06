count, value = 1,0

while True:
	if count == 1001:
		value = str(value);
		break
	value += count ** count
	count += 1

print(value[len(value)-10:]);