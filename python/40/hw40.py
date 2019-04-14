unsorted_list=[20,10,30,6,8,7]#i know it doesnt work.dont know why
x=0
for slot in unsorted_list:
    if slot < unsorted_list[x]:
            temp=slot
            slot=unsorted_list[x]
            unsorted_list[x]=temp
            x+=1
    else:
            x+=1
            print('a')

print(unsorted_list) 