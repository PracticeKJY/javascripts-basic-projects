import getNode from "../util/getNode.js"

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer 3년차",
    img: "./img1.jpeg",
    text: "안녕 난 수잔이라고해. 여기 맨날 잘난척하는 사장있는데 그냥 찐따임... 바지사장 주제에 온갖 허세 다부림 ",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer 2년차",
    img: "./img2.jpeg",
    text: "난 안나 존쓴이라고해. 우리 사장님 완전 쏘쿨 멋쟁이 아니니?? 하 너무 볼수록 빠져들어 갖고싶다 저.남.자 ",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern 3개월",
    img: "./img3.jpeg",
    text: "인턴 피터 존스라고 합니다. 파파존스아니고요, 수잔님이 제 담당인데 진짜 맨날 자기가 해야할거 저한테 짬때리네요.. 당장이라도 때려치고 싶어요",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss(바지사장)",
    img: "./img4.jpeg",
    text: "사장 빌 안데rrrr손이라고해. 영앤리치한 내 모습 멋지지 않니? 훗 내가 봐도 난 너무 멋져",
  },
]

// step1. 각각의 태그들을 따옴
const imgContainer = getNode(".imgContainer")
const img = getNode("#personImg")
const author = getNode("#author")
const job = getNode("#job")
const info = getNode("#info")
const prevBtn = getNode(".prevBtn")
const nextBtn = getNode(".nextBtn")
const randomBtn = getNode(".randomBtn")

// step2. 각 카드의 number를 index에 접근 할거니까 초기값 0으로 우선 진행시켜
let currentCardIndex = 0

// step3. 카드 템플릿을 하나 찍음.
//객체의 key값들을 각각의 맞는 위치(태그들)에 textContent를 이용해서 매칭시킴
function renderCard() {
  const reviewCard = reviews[currentCardIndex]

  img.src = reviewCard.img
  img.alt = reviewCard.name
  author.textContent = reviewCard.name
  job.textContent = reviewCard.job
  info.textContent = reviewCard.text
}
// step3-1. 함수를 만들었으니까 한번 호출도 스윽 해주고,
//(안해주면 브라우저가 "초기화면 어떻게 띄우더라..?" 이럼)
renderCard()

// step4. prev,next버튼을 누를 때 다음 카드(다음 index)로 넘어가게 이벤트핸글러 걸어줌
const handleMovePrevCard = () => {
  currentCardIndex--
  //0보다 작을때 prev 누르면 4번째 인덱스 갈 수 있도록 해줌
  if (currentCardIndex < 0) {
    currentCardIndex = reviews.length - 1
  }
  renderCard()
}
const handleMoveNextCard = () => {
  currentCardIndex++
  // 4번누르면 다시 첨으로 갈수 있도록 초기화
  if (currentCardIndex > reviews.length - 1) {
    currentCardIndex = 0
  }
  renderCard()
}
prevBtn.addEventListener("click", handleMovePrevCard)
nextBtn.addEventListener("click", handleMoveNextCard)

randomBtn.addEventListener("click", () => {
  currentCardIndex = Math.floor(Math.random() * reviews.length)
  console.log(currentCardIndex)
  return renderCard()
})
