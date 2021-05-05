let votedForMe = getVoteCount('votedForMe')
let totalVoters = getVoteCount('totalVoters')

let addVotedForMeBtn = document.getElementById("voted-for-me")
let addtotalVotersBtn = document.getElementById("another-voter")
let resetBtn = document.getElementById("reset")


displayVoteCount("voted-for-me-count", votedForMe)
displayVoteCount("voters-count", totalVoters)


addVotedForMeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // get Voted For me Count
    let votedForMe = getVoteCount('votedForMe')

    votedForMe += 1

    // Save the current Vote Count
    updateVoteCount('votedForMe', votedForMe)

    // Update Voted For me Count
    displayVoteCount("voted-for-me-count", votedForMe)
})

addtotalVotersBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // get Total Voters Count
    let totalVoters = getVoteCount('totalVoters')

    totalVoters += 1

    // Save the current Vote Count
    updateVoteCount('totalVoters', totalVoters)

    // Update Voted For me Count
    displayVoteCount("voters-count", totalVoters)
})

resetBtn.addEventListener("click", (e) => {
    e.preventDefault()

    updateVoteCount('votedForMe', 0)
    updateVoteCount('totalVoters', 0)

    displayVoteCount("voters-count", 0)
    displayVoteCount("voted-for-me-count", 0)
})



function displayVoteCount(field, voteCount) {
    let countField = document.getElementById(field)
    countField.innerHTML = voteCount
}

function updateVoteCount(category, voteCount) {
    localStorage.setItem(category, voteCount)
}

function getVoteCount(category) {
    let voteCount = localStorage.getItem(category)

    if (!voteCount) {
        localStorage.setItem(category, 0)
    }

    voteCount = parseInt(localStorage.getItem(category))

    return voteCount
}