export const getWordForCount = (count, text = 'p') => 
{
    const data = {
        'p': ['людина', 'людини', 'людей'],
        'i': ['імпакт-інвестор', 'імпакт-інвестори', 'імпакт-інвесторів'],
        'k': ['компанія', 'компанії', 'компаній']
    };

    if (count % 10 === 1 && count % 100 !== 11) {
        return data[text][0];
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
        return data[text][1];
    } else {
        return data[text][2];
    }
}