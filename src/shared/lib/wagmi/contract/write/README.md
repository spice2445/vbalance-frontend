# wagmi/contract/read

## Обзор
Библиотека `writeContractFx` еффект-оболочка для создания эффектов в которых вызывается сам метод контракта - **write** метод.
- Принимает: `WriteContractParameters` из `viem`

### Пример использования
```javascript
interface transferUsdcFxProps {
  to: string,
  amount: string,
}

export const transferUsdcFx = attach({
  mapParams: ({
    to,
    amount
  }: transferUsdcFxProps) => ({
    functionName: 'transfer',
    args: [
      to,
      parseEther(amount)
    ]
  }),
  effect: USDC_CONTRACTS.write // контракт из `shared/config/wagmi/contracts`
});
```