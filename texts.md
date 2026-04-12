// Mean, Median and Mode of Grouped Data
mid=seq(147.5,182.5,5)
> f=c(4,6,28,58,64,30,5,5)
Mean:--
> mean=(sum(mid*f))/sum(f)
> mean

Median
> midx=seq(147.5,182.5,5)
> frequency=c(4,6,28,58,64,30,5,5)
cl=cumsum(frequency)
n=sum(frequency)
ml=min(which(cl>=n/2))
h=5
f=frequency[ml]
c=cl[ml-1]
l=mid[ml]-h/2
median=l+(((n/2)-c)/f)*h
median

Mode:-
> m=which(frequency==max(frequency))
> fm=frequency[m]
> f1=frequency[m-1]
> f2=frequency[m+1]
> l=midx[m]-h/2
> mode=l+((fm-f1)/(2*fm-f1-f2))*h
> mode

// Skewness and Kurtosis
>x=c(15.9,16.2,16.0,15.6,16.2,15.9,16.0,15.6,15.6,16.0,16.2,15.6,15.9,16.2,15.6,16.2,15.8,16.0,15.8,15.9,16.2,15.8,15.8,16.2,16.0,15.9,16.2,16.2,16.0,15.6)
> n=length(x)
> mean=mean(x)
> mean
> m4=sum((x-mean)^4)/n
> m4
> m2=var(x)
> m2
> beta2=m4/(m2^2)
> beta2
> gam2=beta2-3
> gam2

// Binomial Distribution
n = 4
p = 0.02

dbinom(2, n, p)

sum(dbinom(2:4, n, p))
1 - pbinom(1, n, p)

sum(dbinom(0:2, n, p))
pbinom(2, n, p)

x = 0:n
px = dbinom(x, n, p)
Ex = weighted.mean(x, px)

Varx = weighted.mean(x*x, px) - (weighted.mean(x, px))^2

plot(x, px, type="h", xlab="values of x", ylab="Probability distribution of x", main="Binomial distribution")

qbinom(0.1, 10, 1/3)
qbinom(0.2, 10, 1/3)

qbinom(0.25, 51, 1/2)

x <- rbinom(8, 150, 0.4)
print(x)

// Poisson Distribution
m = 20
ps = 0.02
lambda = m * ps

p1 = sum(dpois(2:m, lambda))
round(1000 * p1)

p2 = dpois(2, lambda)
round(1000 * p2)

p3 = sum(dpois(0:2, lambda))
round(1000 * p3)

x1 = 0:m
px1 = dpois(x1, lambda)
plot(x1, px1, type="h", xlab="values of x", ylab="Probability distribution of x", main="Poisson distribution")

Ex1 = weighted.mean(x1, px1)
Varx1 = weighted.mean(x1*x1, px1) - (weighted.mean(x1, px1))^2

qpois(0.95, 2.5)

rpois(2, 3)
rpois(6, 6)

// Normal Distribution
x = seq(0, 40)
y = dnorm(x, mean=20, sd=5)

plot(x, y, type='l')

p1 = pnorm(15, mean=20, sd=5)

x2 = seq(0, 15)
y2 = dnorm(x2, mean=20, sd=5)
polygon(c(0, x2, 15), c(0, y2, 0), col='yellow')

p2 = pnorm(40, mean=20, sd=5) - pnorm(25, mean=20, sd=5)

x1 = seq(25, 40)
y1 = dnorm(x1, mean=20, sd=5)
polygon(c(25, x1, 40), c(0, y1, 0), col='red')

p3 = pnorm(25, mean=20, sd=5) - pnorm(15, mean=20, sd=5)

x3 = seq(15, 25)
y3 = dnorm(x3, mean=20, sd=5)
polygon(c(15, x3, 25), c(0, y3, 0), col='green')

data.frame(p1, p2, p3)

qnorm(0.85, mean=70, sd=3)

random_values <- rnorm(n=25)


// Z - test
mu0 = 15.4
sigma = 2.5
n = 35
xbar = 14.6
z = (xbar - mu0)/(sigma/sqrt(n))
z
alpha = 0.05
zhalfalpha = qnorm(1-(alpha/2))
zhalfalpha
c(-zhalfalpha, zhalfalpha)
pval = 2 * pnorm(z)
pval

if(pval > alpha){
  print("Accept Null hypothesis")
} else {
  print("Reject Null hypothesis")
}

// Sample Proportion Test
n = 640
Sprop = 63/n
Pprop = 0.1726
q = 1 - Pprop
z = (Sprop - Pprop) / sqrt(Pprop * q / n)
z
E = qnorm(0.975)
E
c(-E, E)
Sprop + c(-E, E) * sqrt(Pprop * (1 - Pprop) / n)
if(z > -E && z < E) {
  print("Hospital is not efficient")
} else {
  print("Hospital is efficient")
}

// Two-Sample Z-Test
xbar = 20
ybar = 15
sigma = 4
n1 = 500
n2 = 400
z = (xbar - ybar) / (sigma * sqrt((1/n1) + (1/n2)))
z

alpha = 0.05
zalpha = qnorm(1 - (alpha/2))
zalpha

c(-zalpha, zalpha)
if(z > -zalpha && z < zalpha){
  print("Accept Null hypothesis")
} else {
  print("Reject Null hypothesis")
}

// Test for Difference in Proportions
p1=0.20
p2=0.185
n1=900
n2=1600
P=(n1*p1+n2*p2)/(n1+n2)
P
Q=1-P
Q
z=(p1-p2)/sqrt(P*Q*((1/n1)+(1/n2)))
z
alpha=0.05
zalpha=qnorm(1-(alpha/2))
zalpha
c(-zalpha,zalpha)
if(z>-zalpha&&z<zalpha){print("Accept Null hypothesis")}else{print("Reject Null hypothesis")}

// t-test
sample1=c(19,17,15,21,16,18,16,14)
sample2=c(15,14,15,19,15,18,16,20)
t=t.test(sample1,sample2)
t
cv=t$statistic
cv
tv=qt(0.975,14)
tv
if(cv<=tv){print("Accept Ho")}else{print("Reject Ho")}

// Paired t-test
test1=c(19,17,15,21,16,18,16,14,19,20)
test2=c(15,14,15,19,15,18,16,20,22,19)
t=t.test(test1,test2,paired=TRUE)
t
alpha=0.05
tv=t$p.value
tv
if(tv>alpha){print("Accept Ho")}else{print("Reject Ho")}

// F-test
sample1=c(19,17,15,21,16,18,16,14)
sample2=c(15,14,15,19,15,18,16,20)
f=var.test(sample1,sample2)
f
cv=f$statistic
cv
tv=qf(0.95,7,7)
tv
if(cv<=tv){print("Accept Ho")}else{print("Reject Ho")}

// Chi-Square Test
data=matrix(c(69,51,81,20,35,44),ncol=2,byrow=T)
data
l=length(data)
l
cv=chisq.test(data)
cv
alpha=0.05
cv=cv$p.value
cv
if(cv>alpha){print("Attributes are independent")}else{print("Attributes are not independent")}

// Chi-Square Test for Goodness of Fit
n=5
alpha=0.05
N=256
P=0.5
x=c(0:n)
obf=c(5,35,75,84,45,12)
exf=(dbinom(x,n,P)*256)
exf
sum(obf)
sum(exf)
chisq<-sum((obf-exf)^2/exf)
cv=chisq
cv
tv=qchisq(1-alpha,n)
tv
if(cv<=tv){print("Accept H0/Fit is good")}else{print("Reject H0/Fit is not good")}

// Pearson's Correlation Coefficient and Spearman's Rank Correlation Coefficient
data = cars
summary(data)

v1 = var(data$speed)
v2 = var(data$dist)

covariance = cov(data$speed, data$dist)

corr = covariance / (sd(data$speed) * sd(data$dist))

cor.test(data$speed, data$dist)
cor.test(data$speed, data$dist, method="pearson")
cor.test(data$speed, data$dist, method="spearman")

// Simple Linear Regression - 1
plot(data$speed, data$dist)

regression1 = lm(data$speed ~ data$dist)
abline(regression1)
summary(regression1)

regression2 = lm(data$dist ~ data$speed)
abline(regression2)
summary(regression2)

// Simple Linear Regression - 2
weight = c(15, 26, 27, 25, 25.5, 27, 32, 18, 22, 20, 26, 24)
bmi = c(13.35, 16.12, 16.74, 16.00, 13.59, 15.73, 15.65, 13.85, 16.07, 12.88, 13.65, 14.42)

cor(weight, bmi)

model = lm(bmi ~ weight)
summary.lm(model)
coefficients(model)

// Simple Linear Regression - 3
X = c(15, 16, 20, 14, 17, 18, 19, 21, 22)
Y = c(30, 39, 32, 31, 34, 35, 37, 39, 40)

mean(X)
mean(Y)

plot(X, Y)

model_Y_on_X = lm(Y ~ X)
abline(model_Y_on_X, col="red")

model_X_on_Y = lm(X ~ Y)
c_X = coefficients(model_X_on_Y)[1]
m_X = coefficients(model_X_on_Y)[2]
abline(-c_X/m_X, 1/m_X, col="blue")

coefficients(model_Y_on_X)
coefficients(model_X_on_Y)

cor(X, Y)

// Multiple Linear Regression
Y = c(110, 80, 70, 120, 150, 90, 70, 120)
X1 = c(30, 40, 20, 50, 60, 40, 20, 60)
X2 = c(11, 10, 7, 15, 19, 12, 8, 14)

RegModel = lm(Y ~ X1 + X2)
RegModel

summary(RegModel)

library(scatterplot3d)

scatterplot3d(Y, X1, X2)

// Assignment Question
data = trees

X1 = trees$Girth
X2 = trees$Height
Y = trees$Volume

model = lm(Y ~ X1 + X2)
summary(model)

library(scatterplot3d)
plot3d = scatterplot3d(X1, X2, Y, main="Tree Volume Prediction: Girth and Height vs Volume")
plot3d$plane3d(model)

// ANOVA
A = c(36, 37, 42, 38, 47)
B = c(46, 39, 35, 37, 43)
C = c(35, 42, 37, 43, 38)
D = c(45, 36, 39, 35, 32)
E = c(41, 39, 37, 35, 38)

group = data.frame(cbind(A, B, C, D, E))
summary(group)

stgr = stack(group)
stgr

crd = aov(values ~ ind, data=stgr)
summary(crd)

boxplot(group, ylab="Average life of tyres in kilometers", main="Brands of Tyres")

// Two-Way ANOVA
StateA = c(6, 5, 3, 8)
StateB = c(8, 9, 6, 5)
StateC = c(10, 7, 8, 7)

Group = data.frame(cbind(StateA, StateB, StateC))

Sales = c(t(as.matrix(Group)))

f = c("State A", "State B", "State C")
g = c("Salesman1", "Salesman2", "Salesman3", "Salesman4")

k = ncol(Group)
n = nrow(Group)

States = gl(k, 1, n*k, factor(f))
Salesmen = gl(n, k, n*k, factor(g))

anova = aov(Sales ~ States + Salesmen)
summary(anova)

// Two-Way ANOVA - Example 2
manure = rep(c("manure1", "manure2", "manure3", "manure4", "manure5"), 5)

cultivation = c(rep("cultP", 5), rep("cultQ", 5), rep("cultR", 5), rep("cultS", 5), rep("cultT", 5))

crop = c("P", "T", "R", "Q", "S", "R", "Q", "P", "S", "T", "Q", "R", "S", "T", "P", "S", "P", "T", "R", "Q", "T", "S", "Q", "P", "R")

freq = c(42, 45, 41, 56, 47, 47, 54, 46, 52, 49, 55, 52, 57, 49, 45, 51, 44, 47, 50, 54, 44, 50, 48, 43, 46)

data = data.frame(cultivation, manure, crop, freq)

matrix(data$crop, 5, 5)
matrix(data$freq, 5, 5)

fit = lm(freq ~ manure + cultivation + crop, data)
anova(fit)