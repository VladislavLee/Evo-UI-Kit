import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvoUiKitModule } from 'evo-ui-kit';

storiesOf('Components/EvoTable', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                EvoUiKitModule,
            ],
        }),
    )
    .add('default', () => ({
        template: `
        <evo-table>
            <evo-table-column [data]="data"></evo-table-column>
        </evo-table>
        `,
        props: {
            data: [ 'row 1', 'row 2' ],
        },
    }));
