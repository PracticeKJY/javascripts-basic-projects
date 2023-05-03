const getNode = (node) => {
  if (typeof node !== "string") {
    throw new Error("argument로 문자열 주세요")
  }
  return document.querySelector(node)
}

export default getNode
