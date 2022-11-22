# 시작전 
movemoa 폴더에서 npm i 
cd react_front npm i 

# 파일 구조 
- movemoa 바로 밑에 있는 것들이 백엔드 express (index.js)
- react_front 부분이 이제 보이는 부분 

# 실행시키는 법 
-처음에 movemoa/index.js에서 컨트롤+shift+R 누르면 
RUN 으로 express 서버 실행되고 
- 위에 그대로 놔둔 다음에 webstorm 안에 terminal 누르고
- terminal 창 켜졌으면 **cd react_front 로 이동**
- npm start dev 하면 프론트 서버 켜짐 

- -> 하고 http://localhost:3000 
- 들어가면 프론트 보임 
- 거기에 일단 index는 제작중이고 
- 위에 navbar에 맞는 테이블을 
- mongoose 를통해 설계하고 api 만들면 됨

## API 예시 
-  index.js 에 Todo예시 부분 보면 
-  data 라는 object 타입 데이터를 
-  res.json 으로 json 으로 바꿔서 보내주고 
- 그 데이터를 받는 프론트의 경로는
- react_front/src/page/BusTimetable 보면 어떻게 넣은지 흐름만보고 

# 동범이 일단 해야할일 API 로 데이터 어떻게 보내는지 그냥 느낌잡고 

# https://victorydntmd.tistory.com/m/91 
여기 사이트 들어가서 3번 에 브랜치 각각 생성해서 만져보면서 다시 빠꾸해도되니까 그렇게 하면될듯 ? 

