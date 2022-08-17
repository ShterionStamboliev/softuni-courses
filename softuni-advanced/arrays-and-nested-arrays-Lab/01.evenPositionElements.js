function evenPositionElements(input) {
    return input.filter((num, index) => index % 2 === 0).join(' ');
}
evenPositionElements(['20', '30', '40', '50', '60']);