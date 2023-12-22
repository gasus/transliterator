# Repository

https://github.com/gasus/transliterator

# Demo

https://gasus.github.io/transliterator/

# Install

```
npm i -D  @gasu/transliterator
```

# Import

```
import { transliteration } from "@gasu/transliterator";
```

# Types

```
transliteration: ({ text, mode, }: {
    text: string;
    mode: "jp" | "en";
}) => string;
```

# Example

```
const text = 'Съешь ещё этих мягких французских булок, да выпей чаю'

transliteration({ text, mode: "jp", })
'仁ら巳山ら 巳山它 彐丁仈乂 从牙厂片仈乂 中尸丹廾凵丫弓仁片仈乂 五丫几口片, 亼丹 乃お刀巳认 丩丹扣'

transliteration({ text, mode: "en", })
'CbEIIIb EIIIE 3TUX M9GKUX <|>PAHuY3CKUX 6YJI0K, gA BblI7EU 4AIO'
```
