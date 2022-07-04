# Project 01-LabQ

---

<p align="center"><img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/92951159_100385904982114_9157305144805687296_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LmP80Vencu8AX8st3h2&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_8QQ6cpvtP92VtpuOffFuBhhXAvXBdhKb4c6O3ZmNl6A&oe=62E29568"></p>

---

## [목차](#목차)

[1.팀원 소개](#1팀원-소개)  
[2.과제 개요](#2과제-개요)  
[3.기술 스택](#3기술스택)  
[4.프로젝트 역할 및 기능 구현](#4프로젝트-역할-및-기능구현)

---

## 1.팀원 소개

**Team B-Free**

[<img alt="Notion" src ="https://img.shields.io/badge/Notion-white.svg?&style=for-the-badge&logo=Notion&logoColor=black" target="_blank">](https://www.notion.so/Team-B-free-570d9ad0522a4c04b54b345b2eb7778d)

|                                            팀장                                            |                                                                        팀원                                                                         |                                                                        팀원                                                                        |                                                                        팀원                                                                         |                                                                        팀원                                                                         |
| :----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/57566889?v=4" width="100" height="100"/> | <a href="https://github.com/KCH6937" target="_blank"><img src="https://avatars.githubusercontent.com/u/48710060?v=4" width="100" height="100"/></a> | <a href="https://github.com/StarFace90" target="_blank"><img src="https://avatars.githubusercontent.com/u/77761615?v=4" width="100" height="100"/> | <a href="https://github.com/juhwano" target="_blank"><img src="https://avatars.githubusercontent.com/u/77667889?v=4" width="100" height="100"/></a> | <a href="https://github.com/chldppwls12" target="_blank"><img src="https://avatars.githubusercontent.com/u/63734765?v=4" width="100" height="100"/> |
|                                       **이지민**</a>                                       |                                         <a href="https://github.com/KCH6937" target="_blank">**강채현**</a>                                         |                                       <a href="https://github.com/StarFace90" target="_blank">**박성용**</a>                                       |                                         <a href="https://github.com/juhwano" target="_blank">**오주환**</a>                                         |                                       <a href="https://github.com/chldppwls12" target="_blank">**최예진**</a>                                       |

---

## 2.과제 개요

    프로젝트 기간 : 2022.06.29 ~ 2022.07.01

<br>

#### 2-1. 과제 주제

     Open API방식의 공공데이터를 수집, 가공하여 전달하는 REST API개발

<br>

#### 2-2. 공공 데이터

- <a href="https://data.seoul.go.kr/dataList/OA-2527/S/1/datasetView.do" target="_blank">**서울시 하수관로 수위현황**</a>
- <a href="http://data.seoul.go.kr/dataList/OA-1168/S/1/datasetView.do" target="_blank">**서울시 강우량 정보**</a>

<br>

#### 2-3. 개발 요건

- 과제 제출기간은 과제 시작일로 부터 `72시간` 입니다
- 전달하는 데이터는 `JSON` 형식이어야 합니다
- 필요한 경우 요구사항을 추가로 정의해서 개발하면 됩니다

<br>

#### 2-4. 과제 해석

     과제 주제와 연관 지어 왜 과제를 냈는지를 해석
     서비스 활용사례와 요구사항을 통합하여 주제를 설정하고, 주제를 뒷받침할 근거를 논의

<br>

- #### 서울시

  <br>

  - **서울시**에 **`폭우`** 로 인한 **`도로 침수`** 와 퇴근길 **`차량 정체`** 등의 **`침수 문제`**
  - **하수관** 은 시간 당 **`75mm의 강수량에 견디게 설계`**(2011) 그러나 2022년 현재까지`빗물 저류 시설`이 정비 되지 않아 **`최근까지도 하수관 역류 및 침수 문제 발생`**
  - 최근 **서울시** 에서 **`온실가스 저감을 위해 기후 변화 대응 종합 계획 추진`**, **`물 환경 분야 사업 추진`** 및 **`서울시 물 환경 인프로 구축`** 을 위한 노력 중

   <br>

         침수 피해 사전 예방하여 피해 최소화

<br>

- #### 공공 데이터 서비스 활용 사례 파악

      12년 8월 관악구 하수관로 수위가 평소보다 2배이상 상승한 것을 확인 한 뒤 토사를 제거해 침수 피해 예방

  - **`하수관로 수위 비율`** 이 **`80~90%`** 를 넘어 **`침수 위험상황`** 판단시 **`자치구 재난 안전 대책 본부`** 에서 해당 지역 **`주민 문자`** 등 즉시 전파
    <br>
  - **하수관로 수위** 가 **`60% 이상`** 일 시 해당 지역 **`담당 공무원`** 들에게 자동으로 문자가 발송, 사전에 **`침수 예방`** 조치
    <br>
  - **`강우량이 없음`** 에도 평상시 수위보다 **`높은 수위`** 일 경우, **`하수관로 내부 점검`** 해 하수관로에 유입된 **`토사, 퇴적물`** 등을 미리 **`제거`** 하여 **`침수 피해 예방`**

<br>

- #### 랩큐

  - **랩큐**는 **`인공지능`** 기술을 기반으로 **`이상징후 탐지`** , **`문서요약`** 등 다양한 서비스를 제공
  - **랩큐** 의 클라이언트는 `문체부`, `도로공사` 등 `공공기관` 및 `정부 부처 기관`
  - 주요 업무는 **`데이터 수집/전처리`**, **`EDA(탐색적 데이터 분석)`**, **`빅데이터 분석`**
    <br>

          데이터 전처리 및 가공 서비스로 이상징후 탐지 하는 AI 서비스 개발 → 서울시와의 사업 협업을 위함

    <br>

- #### 결론

  <br>

  - **서울시**의 **`기후변화 대응 계획`** 과 **`물 환경 인프라 구축을 위한 사업이 진행`** 중이고  
    **랩큐**에서는 이를 위해 **`빅데이터`** 나 **`딥러닝 엔진 학습`** 등의 활용에 **`데이터 수집을 위한 REST API + 클라이언트`** 가 필요
    <br>
  - **랩큐**에서 서비스 하고 있는 **`데이터 전처리 및 가공 서비스 활용`** 부분 관점에서 볼 때 **코스 참여자들**이 **데이터**를 **`수집`**, **`가공`** 하여 **`분류`** 하는 **역량**을 확인 하여 **랩큐**의 실무와 잘 맞는지를 확인 하기 위함
    <br>
  - **데이터**를 이용해 **`REST API를 구현하는 기본적인 설계 및 개발 능력을 보기 위함`**

 <br>

---

## 3.기술스택

<img alt="JavaScript" src ="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> <img alt="Node" src ="https://img.shields.io/badge/NodeJS-339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white"/> <img alt="Express" src ="https://img.shields.io/badge/Express-000000.svg?&style=for-the-badge&logo=Express&logoColor=white"/>

---

## 4.프로젝트 역할 및 기능구현

<br>

#### 4-1. 프로젝트 역할

<br>

|         팀          |        팀원        |                역할                 |
| :-----------------: | :----------------: | :---------------------------------: |
|  **데이터 수집팀**  | **오주환 박성용**  | **공공데이터 OPEN API 데이터 수집** |
| **데이터 전처리팀** | **강채현, 최예진** | **반환할 데이터 지정, 데이터 가공** |
|  **데이터 반환팀**  |     **이지민**     |     **가공된 데이터 반환 처리**     |

 <br>

#### 4-2. 구현

 <br>

##### 4-2-1. 과제 요구 조건

          GUBN(구분코드)를 명시해서 REST API를 호출 할 수 있다

 <br>

##### 4-2-2. 실행 설명

```
# 레포지토리 Clone 및 폴더 이동

git clone https://github.com/team-B-free/01-LabQ.git
cd 01-LabQ


# dependencies 설치

npm install


# husky 설치

npm run prepare


# 서버 실행 (Nodemon 사용시)
npm run dev


# 로컬 서버 실행
npm start
```

 <br>

##### 4-2-3. 응답 요청

**요청주소**:`http://localhost:3000/api?guCode=GUBN`

`http://localhost:3000/api?guCode=01`

 <br>

##### 4-2-4. 응답 결과

<p align="center"><img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/31690fad-6c68-434e-bf34-d994e248ce62/response.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220703T093422Z&X-Amz-Expires=86400&X-Amz-Signature=b02dc20a7db03096e3bac30e6138897f3aacd2f961fff6671ca82cbde53d4b4e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22response.png%22&x-id=GetObject" height="100%" width="100%"></p>

 <br>

---
