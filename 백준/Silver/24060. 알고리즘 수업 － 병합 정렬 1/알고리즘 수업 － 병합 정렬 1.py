N, K = map(int, input().split())
A = list(map(int, input().split()))
trr = [0] * (N + 1)
cnt = ans = 0

def mergeSort(s, e):
    global cnt, ans

    if s >= e:
        return

    mid = (s + e) // 2
    mergeSort(s, mid)
    mergeSort(mid + 1, e)

    if cnt >= K:
        return

    i, j, k = s, mid + 1, s
    while i <= mid and j <= e:
        if A[i] <= A[j]:
            trr[k] = A[i]
            i += 1
        else:
            trr[k] = A[j]
            j += 1
        k += 1

    while i <= mid:
        trr[k] = A[i]
        i += 1
        k += 1

    while j <= e:
        trr[k] = A[j]
        j += 1
        k += 1

    for i in range(s, e + 1):
        A[i] = trr[i]

        cnt += 1
        if cnt == K:
            ans = A[i]
            return

mergeSort(0, N - 1)

if cnt < K:
    print("-1")
else:
    print(ans)
