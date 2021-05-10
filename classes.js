// Determinding a client's family name : Desired Result = use Nickname if applicable & only use spouse's name if both are clients 
// Ex: Nickname Lastname or Nickname & SpouseNickname Lastname (if both are clients)
class Client {
    constructor(first, last, nickname, spouseFirst, spouseLast, spouseNickname, maritalStatus, clientStatus, spouseClientStatus) {
        this.first = first
        this.last = last
        this.nickname = nickname
        this.spouseFirst = spouseFirst
        this.spouseLast = spouseLast
        this.spouseNickname = spouseNickname
        this.maritalStatus = maritalStatus
        this.clientStatus = clientStatus
        this.spouseClientStatus = spouseClientStatus
        this.familyName = ""  
    }
    findFamilyName() {
        let { first, last, nickname, spouseFirst, spouseNickname, maritalStatus, spouseClientStatus, familyName} = this
        if (maritalStatus !== "married"){
            if (nickname !== ""){
                familyName = `${nickname} ${last}`
            }
            familyName = `${first} ${last}`
        } else if (maritalStatus === "married" && spouseClientStatus === "client") {
            if (nickname !== "" && spouseNickname !== "") {
                familyName = `${nickname} & ${spouseNickname} ${last}`
            } else if (nickname !== "" && spouseNickname === "") {
                familyName = `${nickname} & ${spouseFirst} ${last}`
            } else if (nickname === "" && spouseNickname !== "") {
                familyName = `${first} & ${spouseNickname} ${last}`
            } else {
                familyName = `${first} & ${spouseFirst} ${last}`
            }
        } else {
            if (nickname !== "") {
                familyName = `${nickname} ${last}`
            } else {
                familyName = `${first} ${last}`
            }
        }
        console.log(familyName)
    }
}

// Both are clients
let bothNicknamesProfile = new Client("John", "Can", "Jim", "Jane", "Can", "Janny", "married", "client", "client")
let spouseNicknameProfile = new Client("Sam", "Can", "", "Jane", "Can", "Janny", "married", "client", "client")
let noNicknamesProfile = new Client("Sam", "Can", "", "Jane", "Can", "", "married", "client", "client")
// Spouse is Nonclient
let nicknameNonClientProfile = new Client("Sam", "Can", "Sammy", "Jane", "Can", "", "married", "client", "nonclient")
let nonClientProfile = new Client("Sam", "Can", "", "Jane", "Can", "", "married", "client", "nonclient")