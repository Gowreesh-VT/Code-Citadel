Problem 1: Mean, Median, and Mode for Raw Data

R
x = c(18, 19, 19, 19, 19, 20, 20, 20, 20, 20, 21, 21, 21, 21, 22, 23, 24, 27, 30, 36)

mean(x)                           # Arithmetic Mean
median(x)                         # Median
median(x[x < 25])                 # Median of students under 25

xr = table(x)                     # Create frequency table
which(xr == max(xr))              # Find Mode
Problem 2: Mean and Median for Discrete Frequency Distribution

R
x = c(0, 1, 2, 3)
f = c(8, 11, 5, 1)

y = rep(x, f)                     # Replicate data based on frequency

mean(y)                           # Simplification: (sum(y) / length(y))
median(y)
Problem 3: Mean, Median, and Mode for Continuous Grouped Data

R
mid = seq(147.5, 182.5, 5)        # Class midpoints
f = c(4, 6, 28, 58, 64, 30, 5, 5) # Class frequencies
fr.distr = data.frame(mid, f)     # View grouped data table

# 1. Grouped Mean
grouped_mean = sum(mid * f) / sum(f)

# 2. Grouped Median
n = sum(f)
cl = cumsum(f)
ml = min(which(cl >= n/2))        # Index of median class
h = 5                             # Class width

l_med = mid[ml] - h/2             # Lower boundary of median class
grouped_median = l_med + (((n/2) - cl[ml-1]) / f[ml]) * h

# 3. Grouped Mode
m = which(f == max(f))            # Index of modal class

l_mod = mid[m] - h/2              # Lower boundary of modal class
grouped_mode = l_mod + ((f[m] - f[m-1]) / (2 * f[m] - f[m-1] - f[m+1])) * h
Measures of Dispersion (Mosquito Body Length Data)

R
x = c(1.2, 1.4, 1.3, 1.6, 1.0, 1.5, 1.7, 1.1, 1.2, 1.3)

summary(x)                                  # Quick Min, Max, Mean, Median, Quartiles

range_val = max(x) - min(x)                 # Range (Simplified from 1.7 - 1.0)
var(x)                                      # Variance
sd(x)                                       # Standard Deviation (Simplified from sqrt(var(x)))

cqd = (1.475 - 1.2) / (1.475 + 1.2)         # Coefficient of Quartile Deviation (using Q3 and Q1 from summary)

md_mean = sum(abs(x - mean(x))) / length(x) # Mean deviation about Mean
md_med = sum(abs(x - median(x))) / length(x)# Mean deviation about Median
Measures of Kurtosis using Central Moments (Sugar Bags Data)

R
x = c(15.9, 16.2, 16.0, 15.6, 16.2, 15.9, 16.0, 15.6, 15.6, 16.0, 16.2, 15.6, 15.9, 16.2, 15.6, 16.2, 15.8, 16.0, 15.8, 15.9, 16.2, 15.8, 15.8, 16.2, 16.0, 15.9, 16.2, 16.2, 16.0, 15.6)
n = length(x)

m4 = sum((x - mean(x))^4) / n               # Fourth central moment
m2 = var(x)                                 # Second central moment (Variance)

beta2 = m4 / (m2^2)                         # Beta coefficient of kurtosis
gam2 = beta2 - 3                            # Fisher's Gamma coefficient



Problem 1: Binomial Distribution (Coin Toss Probabilities, Mean, & Variance)

R
n = 4
p = 0.02
x = 0:n
px = dbinom(x, n, p)

dbinom(2, n, p)                                     # (i) Probability of exactly 2 heads
sum(dbinom(2:4, n, p))                              # (ii) Probability of at least 2 heads (Alternative: 1 - pbinom(1, n, p))
pbinom(2, n, p)                                     # (iii) Probability of at most 2 heads

weighted.mean(x, px)                                # (iv) Expectation (Mean) of x
weighted.mean(x*x, px) - (weighted.mean(x, px))^2   # (v) Variance of x

plot(x, px, type="h", main="Binomial distribution") # (vi) Visualize probability distribution
Problem 1b: Binomial Distribution (Quantiles & Random Generation)

R
qbinom(0.1, 10, 1/3)                                # (vii) 10th quantile of Bin(10, 1/3)
qbinom(0.2, 10, 1/3)                                # 20th quantile of Bin(10, 1/3)
qbinom(0.25, 51, 1/2)                               # (viii) Number of heads at 25th percentile (51 tosses, p=0.5)

x_rand = rbinom(8, 150, 0.4)                        # (ix) Generate 8 random values from sample of 150, p=0.4
print(x_rand)
Problem 2: Poisson Distribution (Defective Pins in 1000 Boxes)

R
m = 20
ps = 0.02
lambda = m * ps
x1 = 0:m
px1 = dpois(x1, lambda)

round(1000 * sum(dpois(2:m, lambda)))               # (i) Boxes with at least 2 defectives
round(1000 * dpois(2, lambda))                      # (ii) Boxes with exactly 2 defectives
round(1000 * sum(dpois(0:2, lambda)))               # (iii) Boxes with at most 2 defectives

plot(x1, px1, type="h", main="Poisson distribution")# (iv) Plot the distribution

weighted.mean(x1, px1)                              # (v) Expectation (Mean) of x
weighted.mean(x1*x1, px1) - (weighted.mean(x1, px1))^2 # (vi) Variance of x
Problem 2b: Poisson Distribution (Quantiles & Random Generation)

R
qpois(0.95, 2.5)                                    # 95th percentile of Poisson with mean 2.5
rpois(2, 3)                                         # Generate 2 random numbers, mean = 3
rpois(6, 6)                                         # Generate 6 random numbers, mean = 6
A Quick Note on the Normal Distribution Problem
It looks like the actual R code for the Normal Distribution (Engineer repair job) was accidentally cut off in your document right under the "Code and Results:" heading!

Based on the questions asked in your manual, here is the simplified code you will need to solve that missing section:

Problem 3: Normal Distribution (Engineer Repair Times)

R
mu = 20
sigma = 5

pnorm(15, mean=mu, sd=sigma)                        # (i) Proportion taking less than 15 minutes
1 - pnorm(25, mean=mu, sd=sigma)                    # (ii) Proportion taking more than 25 minutes
pnorm(25, mean=mu, sd=sigma) - pnorm(15, mean=mu, sd=sigma) # (iii) Proportion taking between 15 and 25 minutes


Problem 1: One-Sample Z-Test (Mean Weight of Penguins)

R
xbar = 14.6                 # Sample mean
mu0 = 15.4                  # Population mean
sigma = 2.5                 # Population standard deviation
n = 35                      # Sample size
alpha = 0.05                # Level of significance

z = (xbar - mu0) / (sigma / sqrt(n))      # Calculate Z-statistic
zhalfalpha = qnorm(1 - (alpha/2))         # Two-tailed critical value

pval = 2 * pnorm(z)                       # Calculate p-value

if(pval > alpha) {
  print("Accept Null hypothesis")
} else {
  print("Reject Null hypothesis")
}
Problem 2: One-Sample Proportion Z-Test (Hospital Efficiency / Typhoid)

R
n = 640                     # Sample size
Sprop = 63 / n              # Sample proportion (approx 0.098)
Pprop = 0.1726              # Population proportion
q = 1 - Pprop               # Probability of failure

z = (Sprop - Pprop) / sqrt(Pprop * q / n) # Calculate Z-statistic
E = qnorm(0.975)                          # Critical value (Two-tailed, alpha=0.05)

# If Z is inside the safe zone, it's NOT efficient (just average). If outside, it IS efficient.
if(z > -E && z < E) {
  print("Hospital is not efficient") 
} else {
  print("Hospital is efficient")
}
Problem 3: Two-Sample Z-Test for Means (Comparing Two Samples)

R
xbar = 20                   # Sample 1 mean
ybar = 15                   # Sample 2 mean
sigma = 4                   # Known population standard deviation
n1 = 500                    # Sample 1 size
n2 = 400                    # Sample 2 size
alpha = 0.05                

z = (xbar - ybar) / (sigma * sqrt((1/n1) + (1/n2))) # Calculate Z-statistic
zalpha = qnorm(1 - (alpha/2))                       # Critical value

if(z <= zalpha) {
  print("Accept Null hypothesis")
} else {
  print("Reject Null hypothesis")
}
Problem 4: Two-Sample Proportion Z-Test (School Boys Physical Defect)

R
p1 = 0.20                   # Proportion 1
p2 = 0.185                  # Proportion 2
n1 = 900                    # Sample size 1
n2 = 1600                   # Sample size 2
alpha = 0.05

P = (n1*p1 + n2*p2) / (n1 + n2)           # Pooled population proportion
Q = 1 - P                                 # Pooled probability of failure

z = (p1 - p2) / sqrt(P * Q * (1/n1 + 1/n2)) # Calculate Z-statistic
zalpha = qnorm(1 - (alpha/2))             # Critical value

if(z <= zalpha) {
  print("Accept Null hypothesis")
} else {
  print("Reject Null hypothesis")
}
Problem 5: Small Sample Independent T-Test (Two Sample Means)

R
sample1 = c(19, 17, 15, 21, 16, 18, 16, 14)
sample2 = c(15, 14, 15, 19, 15, 18, 16, 20)

t = t.test(sample1, sample2)              # Run built-in independent t-test
cv = t$statistic                          # Extract Test Statistic
tv = qt(0.975, 14)                        # Critical Value (alpha=0.05, df=14)

# Note: taking absolute value of cv is safer for two-tailed tests
if(abs(cv) <= tv) {
  print("Accept Ho")
} else {
  print("Reject Ho")
}
Problem 6: Paired T-Test (Before and After Coaching)

R
test1 = c(19, 17, 15, 21, 16, 18, 16, 14, 19, 20)
test2 = c(15, 14, 15, 19, 15, 18, 16, 20, 22, 19)

# paired=TRUE is critical here!
t = t.test(test1, test2, paired = TRUE)   
tv = t$p.value                            # Extract p-value
alpha = 0.05

if(tv > alpha) {
  print("Accept Ho")
} else {
  print("Reject Ho")
}
You now have a complete, digitized "cheat sheet" of all the R code needed for Experiments 3, 4, 5, and 6.


Problem 1: F-Test for Comparing Two Variances
(Note: Your lab manual's word problem asks if the "means" are significant, but the R code actually tests the variances. var.test() calculates an F-statistic to see if the spread of the two samples is statistically similar).

R
sample1 = c(19, 17, 15, 21, 16, 18, 16, 14)
sample2 = c(15, 14, 15, 19, 15, 18, 16, 20)

f = var.test(sample1, sample2)       # Run F-test for variances
cv = f$statistic                     # Extract the calculated F-statistic (Test Value)

tv = qf(0.95, 7, 7)                  # Calculate critical F-value (alpha=0.05, df1=7, df2=7)

if(cv <= tv) {
  print("Accept Ho")                 # Variances are statistically equal
} else {
  print("Reject Ho")                 # Variances are significantly different
}
Problem 2: Chi-Square Goodness of Fit (Coin Tossing)
(This test compares the actual data you "observed" against the exact data you mathematically "expected" using the Binomial distribution we learned in Experiment 4).

R
obf = c(5, 35, 75, 84, 45, 12)                  # Observed frequencies of heads (0 to 5)

# Expected frequencies = (Binomial probability of 0 to 5 heads) * (256 total tosses)
exf = dbinom(0:5, size = 5, prob = 0.5) * 256                 

cv = sum((obf - exf)^2 / exf)                   # Manually calculate the Chi-Square statistic
tv = qchisq(0.95, 5)                            # Calculate critical value (1-alpha=0.95, df=5)

if(cv <= tv) {
  print("Accept H0 / Fit is good")              # The coins are fair (unbiased)
} else {
  print("Reject H0 / Fit is not good")          # The coins are rigged (biased)
}
Problem 3: Chi-Square Test of Independence (Child vs. House Condition)
(Think of matrix() here exactly like declaring a 2D array in C/C++: int data[3][2] = {{69, 51}, {81, 20}, {35, 44}};. The byrow=TRUE argument just tells R to fill the matrix row by row!)

R
# Create a 2D table (matrix) of the data, with 2 columns
data = matrix(c(69, 51, 81, 20, 35, 44), ncol = 2, byrow = TRUE)  

chi_test = chisq.test(data)          # Run the built-in Chi-Square test of independence
pval = chi_test$p.value              # Extract only the p-value from the report

alpha = 0.05

if(pval > alpha) {
  print("Attributes are independent")     # House condition does NOT affect child condition
} else {
  print("Attributes are not independent") # House condition DOES affect child condition
}