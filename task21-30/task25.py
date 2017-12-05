count = 3
arr = [1, 1, 2]

while True:
	value = arr[count - 1] + arr[count - 2]
	if len(str(value)) == 1000:
		print(1+count)
		break
	else:
		arr.append(value)
		count += 1

input();