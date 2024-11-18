import { SharedSkeleton } from 'shared/ui/skeleton';
import { TypographySizes } from 'shared/ui/typography';

export type VbalanceTitleVariants = 'Brinkmann' | 'Capital' | 'Social' | 'Life'
 | 'Collaboration' | 'Tokenomics' | 'Arb' | 'Index' | 'AIASystem';

export interface VbalanceTitleProps extends SharedSkeleton {
  title: VbalanceTitleVariants;
  size: TypographySizes;
  className?: string;
}
