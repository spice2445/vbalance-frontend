# wagmi/catch-error

## Обзор
1. Функция `catchErrorWagmi`, принимает обьект `BaseError` из `wagmi`. В функции идёт обработка всех возмодных ошибок из смарт контрактов, ошибка отображается через i8next
2. Функция `connectWallet`, если пользователь не подключил кошелёк, но пытается взаимодействовать с контрактами или другими элементами блокчейна, то вызывается эта функция, которая в свою очередь вызывает тост и открытие модального окна для подключения кошелька
