
#### Steps to reproduce:

1. Run `npm i`

2. Run `npm run start`

4. Open `Memory` tab in DevTools - Node.js and create snapshot

5. Run `npm run test` in the different terminal

6. wait a couple of minutes for GC to clear the memory

7. Create snapshot

#### Expected result:

Latest snapshot should display the same amount of memory as in step 3

#### Actual result:

Latest snapshot displays about 15-20MB

#### Attachments:

![image](https://user-images.githubusercontent.com/70510980/119353627-caa25d80-bcab-11eb-83d0-1bab86324cd3.png)

