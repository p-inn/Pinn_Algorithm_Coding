function solution(myStr) {
    const result = myStr.split(/[abc]/).filter(segment => segment !== "");

    return result.length > 0 ? result : ["EMPTY"];
}