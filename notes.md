Time Complexity formulae:

- for(i=0;i<n;i++) >> O(n)
  for(i=n;i>1;i--) >> O(n)
  for(i=0;i<n;i=i+2) >> n/2 >> O(n)
  for(i=0;i<n;i=i*2) >> O(log2n)
  for(i=0;i<n;i=i*3) >> O(log3n)
  for(i=n;i>1;i=i/2) >> O(log2n)
  for(i=n;i>1;i=i/3) >> O(log3n)

- A number n has about log₁₀(n) digits because log₁₀(n) tells you how many times 10 fits inside n.

- whenever a number is multiplied or divided by a certain number, then the time complexity becomes the log of that number
..