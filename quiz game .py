score = 0

print("Welcome to GK Quiz!")

q1 = input("1. Capital of India? ")
if q1.lower() == "delhi":
    score += 1

q2 = input("2. Largest planet? ")
if q2.lower() == "jupiter":
    score += 1

q3 = input("3. National animal of India? ")
if q3.lower() == "tiger":
    score += 1

q4 = input("4. Who invented bulb? ")
if q4.lower() == "edison":
    score += 1

q5 = input("5. How many continents are there? ")
if q5 == "7":
    score += 1

print("Your Score =", score, "/5")