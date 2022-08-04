# Project 01-LabQ

<p align="center"><img src="https://www.notion.so/image/https%3A%2F%2Fscontent-ssn1-1.xx.fbcdn.net%2Fv%2Ft1.6435-9%2F92951159_100385904982114_9157305144805687296_n.png%3F_nc_cat%3D100%26ccb%3D1-7%26_nc_sid%3D09cbfe%26_nc_ohc%3Dj0Pb8VN3Pd8AX8grQAG%26_nc_ht%3Dscontent-ssn1-1.xx%26oh%3D00_AT-Xs2n_lSTtYbYuuZ1PKxwpCafi05ZE228LCagpEZNvVQ%26oe%3D62F26768?table=block&id=ac60d55e-5f66-42a2-b2ee-8aac17e71df2&spaceId=3901e1ff-47a6-4141-b40f-da457cf66097&width=2000&userId=d5d6b09b-d953-4b20-a898-2f6cbd84ad1c&cache=v2"></p>

# [목차](#목차)

[1.프로젝트 소개](#1프로젝트-소개)  
[2.팀원 소개 및 프로젝트 역할](#2팀원-소개-및-프로젝트-역할)  
[3.기술 스택](#3기술스택)  
[4.프로젝트 실행방법(Installation)](#4-프로젝트-실행방법installation)  
[5.과제 개요](#5과제-개요)
[6.프로젝트 기능 구현](#6프로젝트-기능구현)

<br>

# 1.프로젝트 소개

`서울시 25개 자치구의 최근 1시간 하수관 수위와 10분당 강우량 정보를 보여주는 API 서버`

<br>

# 2.팀원 소개 및 프로젝트 역할

## 2-1. 팀원 소개

### **Team B-Free**

<a href="https://www.notion.so/B-Free-aa588d84d7ec40b28ac68c46b8db5edd" target="_blank"><img src="https://img.shields.io/badge/Notion-white.svg?&style=for-the-badge&logo=Notion&logoColor=black" width="150" height="50"/></a>

|                                            팀장                                            |                                                                        팀원                                                                         |                                                                        팀원                                                                        |                                                                        팀원                                                                         |                                                                        팀원                                                                         |
| :----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/57566889?v=4" width="100" height="100"/> | <a href="https://github.com/KCH6937" target="_blank"><img src="https://avatars.githubusercontent.com/u/48710060?v=4" width="100" height="100"/></a> | <a href="https://github.com/StarFace90" target="_blank"><img src="https://avatars.githubusercontent.com/u/77761615?v=4" width="100" height="100"/> | <a href="https://github.com/juhwano" target="_blank"><img src="https://avatars.githubusercontent.com/u/77667889?v=4" width="100" height="100"/></a> | <a href="https://github.com/chldppwls12" target="_blank"><img src="https://avatars.githubusercontent.com/u/63734765?v=4" width="100" height="100"/> |
|                                       **이지민**</a>                                       |                                         <a href="https://github.com/KCH6937" target="_blank">**강채현**</a>                                         |                                       <a href="https://github.com/StarFace90" target="_blank">**박성용**</a>                                       |                                         <a href="https://github.com/juhwano" target="_blank">**오주환**</a>                                         |                                       <a href="https://github.com/chldppwls12" target="_blank">**최예진**</a>                                       |

 <br>

## 2-2. 프로젝트 역할

**`각 팀의 개발 과정은 페어 프로그래밍으로 진행`**

|         팀          |        팀원        |                역할                 |
| :-----------------: | :----------------: | :---------------------------------: |
|  **데이터 수집팀**  | **오주환 박성용**  | **공공데이터 OPEN API 데이터 수집** |
| **데이터 전처리팀** | **강채현, 최예진** | **반환할 데이터 지정, 데이터 가공** |
|  **데이터 반환팀**  |     **이지민**     |     **가공된 데이터 반환 처리**     |

<br><br>

# 3.기술스택

<img alt="Node" src ="https://img.shields.io/badge/NodeJS-339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white"/> <img alt="Express" src ="https://img.shields.io/badge/Express-000000.svg?&style=for-the-badge&logo=Express&logoColor=white"/>

<br>

# 4. 프로젝트 실행방법(Installation)

```
# 레포지토리 Clone 및 폴더 이동

git clone https://github.com/team-B-free/01-LabQ.git
cd 01-LabQ


# dependencies 설치

npm install


# husky 설치

npm run prepare


# 로컬 서버 실행
npm start
```

<br><br><br>

# 5.과제 개요

**`프로젝트 기간 : 2022.06.29 ~ 2022.07.01`**

<br>

### 5-1. 과제 주제

     Open API방식의 공공데이터를 수집, 가공하여 전달하는 REST API개발

<br>

### 5-2. 사용한 공공 데이터

- <a href="https://data.seoul.go.kr/dataList/OA-2527/S/1/datasetView.do" target="_blank">**서울시 하수관로 수위현황**</a>
- <a href="http://data.seoul.go.kr/dataList/OA-1168/S/1/datasetView.do" target="_blank">**서울시 강우량 정보**</a>

<br>

### 5-3. 과제 컨셉

     과제 주제와 연관 지어 왜 과제를 냈는지를 해석
     서비스 활용사례와 요구사항을 통합하여 주제를 설정하고, 주제를 뒷받침할 근거를 논의

<br>

- ### 서울시

  - **서울시**에 **`폭우`** 로 인한 **`도로 침수`** 와 퇴근길 **`차량 정체`** 등의 **`침수 문제`**
  - **하수관** 은 시간 당 **`75mm의 강수량에 견디게 설계`**(2011) 그러나 2022년 현재까지`빗물 저류 시설`이 정비 되지 않아 **`최근까지도 하수관 역류 및 침수 문제 발생`**
  - 최근 **서울시** 에서 **`온실가스 저감을 위해 기후 변화 대응 종합 계획 추진`**, **`물 환경 분야 사업 추진`** 및 **`서울시 물 환경 인프로 구축`** 을 위한 노력 중

   <br>

         침수 피해 사전 예방하여 피해 최소화

<br>

- ### 공공 데이터 서비스 활용 사례 파악

      12년 8월 관악구 하수관로 수위가 평소보다 2배이상 상승한 것을 확인 한 뒤 토사를 제거해 침수 피해 예방

  - **`하수관로 수위 비율`** 이 **`80~90%`** 를 넘어 **`침수 위험상황`** 판단시 **`자치구 재난 안전 대책 본부`** 에서 해당 지역 **`주민 문자`** 등 즉시 전파
    <br>
  - **하수관로 수위** 가 **`60% 이상`** 일 시 해당 지역 **`담당 공무원`** 들에게 자동으로 문자가 발송, 사전에 **`침수 예방`** 조치
    <br>
  - **`강우량이 없음`** 에도 평상시 수위보다 **`높은 수위`** 일 경우, **`하수관로 내부 점검`** 해 하수관로에 유입된 **`토사, 퇴적물`** 등을 미리 **`제거`** 하여 **`침수 피해 예방`**

<br>

- ### 랩큐

  - **랩큐**는 **`인공지능`** 기술을 기반으로 **`이상징후 탐지`** , **`문서요약`** 등 다양한 서비스를 제공
  - **랩큐** 의 클라이언트는 `문체부`, `도로공사` 등 `공공기관` 및 `정부 부처 기관`
  - 주요 업무는 **`데이터 수집/전처리`**, **`EDA(탐색적 데이터 분석)`**, **`빅데이터 분석`**
    <br>

          데이터 전처리 및 가공 서비스로 이상징후 탐지 하는 AI 서비스 개발 → 서울시와의 사업 협업을 위함

    <br>

- ### 결론

  - **서울시**의 **`기후변화 대응 계획`** 과 **`물 환경 인프라 구축을 위한 사업이 진행`** 중이고  
    **랩큐**에서는 이를 위해 **`빅데이터`** 나 **`딥러닝 엔진 학습`** 등의 활용에 **`데이터 수집을 위한 REST API + 클라이언트`** 가 필요
    <br>
  - **랩큐**에서 서비스 하고 있는 **`데이터 전처리 및 가공 서비스 활용`** 부분 관점에서 볼 때 **코스 참여자들**이 **데이터**를 **`수집`**, **`가공`** 하여 **`분류`** 하는 **역량**을 확인 하여 **랩큐**의 실무와 잘 맞는지를 확인 하기 위함
    <br>
  - **데이터**를 이용해 **`REST API를 구현하는 기본적인 설계 및 개발 능력을 보기 위함`**

 <br>

# 6.프로젝트 기능구현

<!-- ### 4-1. 프로젝트 역할 -->

<!-- **`각 팀의 개발 과정은 페어 프로그래밍으로 진행`**

|         팀          |        팀원        |                역할                 |
| :-----------------: | :----------------: | :---------------------------------: |
|  **데이터 수집팀**  | **오주환 박성용**  | **공공데이터 OPEN API 데이터 수집** |
| **데이터 전처리팀** | **강채현, 최예진** | **반환할 데이터 지정, 데이터 가공** |
|  **데이터 반환팀**  |     **이지민**     |     **가공된 데이터 반환 처리**     |

 <br> -->

- ### 6-1. 응답 요청

   <br>

  **요청주소**

  `http://localhost:3000/api?guCode=GUBN`  
  <br>

  **예)**
  `http://localhost:3000/api?guCode=01`

 <br>

- ### 6-2. 응답 결과

<br>

```json
{
  "status": 200,
  "success": true,
  "message": "성공",
  "data": {
    "GUBN": "01",
    "GUBN_NAM": "종로",
    "SEWER_LEVEL_AVG_PER_HOUR": 0.11147826086956529,
    "RAINGAUGE": [
      {
        "RAINGAUGE_CODE": 1001,
        "RAINGAUGE_NAME": "종로구청",
        "RAINFALL_AVG_PER_HOUR": 0,
        "RAINFALL_SUM_PER_HOUR": 0
      },
      {
        "RAINGAUGE_CODE": 1002,
        "RAINGAUGE_NAME": "부암동",
        "RAINFALL_AVG_PER_HOUR": 0,
        "RAINFALL_SUM_PER_HOUR": 0
      }
    ]
  }
}
```

 <br>

- ### 6-3. 응답 값 설명

<br>

- **`GUBN`**: `(구)분코드`
- **`GUBN_NAM`**: `(구)분명`
- **`SEWER_LEVEL_AVG_PER_HOUR`**: `최근 1시간 하수관 수위 평균`
- **`RAINGAUGE`**
  - **`RAINGAUGE_CODE`**: `강우량계 코드`
  - **`RAINGAUGE_NAME`**: `강우량 계명`
  - **`RAINFALL_AVG_PER_HOUR`**: `최근 1시간 평균 강우량`
  - **`RAINFALL_SUM_PER_HOUR`**: `최근 1시간 누적 강우량`
