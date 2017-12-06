count, summa = 1, 0

def isPalindromic(num):
	if len(num) % 2 == 0:
		return num[0: len(num) // 2] == num[len(num) // 2 : len(num)][::-1]
	else: return num[0: len(num) // 2 + 1] == num[len(num) // 2: len(num)][::-1]

while count < 1000000:
	if isPalindromic(str(count)) and isPalindromic(bin(count)[2:]):
		summa += count
	count += 1;

print(summa)