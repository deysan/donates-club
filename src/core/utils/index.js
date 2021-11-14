import moment from 'moment';

export const calculateSumOfNumbers = (numbers) => {
    return numbers.reduce((a, b) => a + b);
}

export const getFormattedTime = (date) => {
    return moment(date).locale('ru').format('LLL:ss');
}
