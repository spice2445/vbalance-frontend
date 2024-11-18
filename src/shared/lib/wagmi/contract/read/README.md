# wagmi/contract/read

## Обзор
Библиотека `readContractFx` еффект-оболочка для создания эффектов в которых вызывается сам метод контракта - **read** метод.
- Принимает: `ReadContractParameters` из `viem`

### Пример использования
```javascript
interface transferUsdcFxProps {
  to: string,
  amount: string,
}
export const getBalanceAddressUsdcFx = attach({
  source: statesWeb3.$userWeb3,
  mapParams: (_, user) => ({
      functionName: 'balanceOf',
      args: [
          user?.address
      ]
  }),
  effect: USDC_CONTRACTS.read // контракт из `shared/config/wagmi/contracts`
});
```