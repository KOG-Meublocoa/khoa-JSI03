
m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100]
m_clean = []
for i in m:
    if isinstance(i, (int, float)):
        m_clean.append(i)
mSquared = [pow(i, 2) for i in m_clean]



