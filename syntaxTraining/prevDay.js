function prevDay(year, month, day) {

    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const output = `${yy}-${mm}-${dd}`
    console.log(output)
}
prevDay(2016, 9, 30)