export const formatsmoney = (money)=>{
return money.toLocaleString("it-IT",{style:"currency",currency:"VND"})
}