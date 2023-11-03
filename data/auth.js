import bcrypt from 'bcrypt';

let users = [
    {
        id: '1',
        username: 'apple',
        password: '$2b$10$6NVVL4gEtPh684Ncn2sCRe/LPe0u4kRkhBYSoiLx4bTGW5gwQ58Dy',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYEhHx-OXQF1NqVRXPL8R50ggKje3hQTvIA&usqp=CAU'
    },
];

export async function regist(id, username, password, name, email, url) {
    const hashed = bcrypt.hashSync(password, 10);
    const userTable = {
        id,
        username,
        password: hashed,
        name,
        email,
        url
    };
    users = [userTable, ...users]; // users 배열에 새 사용자 추가
    return users; // 업데이트된 사용자 목록 반환
}

export async function checkpassword(id, password){
    const usercheck = users.find((usercheck) => usercheck.id === id);
    if(!usercheck){
        return false;
    }
    const checkpw = await bcrypt.compare(password, usercheck.password)
    return checkpw;
}