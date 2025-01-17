import { test } from "@playwright/test";

/**
 * Decorator that wraps a function with a Playwright test step.
 * Used for reporting purposes.
 *
 * @example
 ```
    import { step } from './step_decorator';
    class MyTestClass {
        @step
        async myTestFunction() {
            // Test code goes here
        }
    }
 ```
 */
export function step<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Promise<Return>,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Promise<Return>
  >
) {
  async function replacementMethod(this: This, ...args: Args) {
    const name = `${this.page?.context()?.ROLE ?? ""} ${
      this.constructor.name
    }.${context.name as string}(${args
      .map((a) => JSON.stringify(a))
      .join(",")})`;

    return test.step(name, async () => target.call(this, ...args), {
      box: true,
    });
  }

  return replacementMethod;
}
