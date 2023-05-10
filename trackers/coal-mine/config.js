var config = {
    accessToken: 'pk.eyJ1IjoiZWFydGhyaXNlIiwiYSI6ImNqeDExNmtrZzAwM2E0OW16eHZ1dzg1eWEifQ.8LTFXyY-n7OsZOoWN9ONPQ',
    csv: 'coal-mine.csv',
    color: { /* will be processed both into style json for paint circle-color property, and for legend. 
            what's right property name?? is color also listing values used in the summary? 
            should this just be made part of the filter? that might allow to address multiple properties */
        field: 'status',
        values: {
            'operating': '#ff0000',
            'proposed': '#ffffff',
            'cancelled': '#ff00ff',
            'shelved': '#0000ff',
            'closed': '#00ffff',
            'mothballed': '#000000'
            // contining
        }
    },
    paint: {
        /* this could be made dynamic based on the range of values in the data */
        'circle-radius': ["max", 2, ["/", ["to-number", ["get", "output"]], 5]]
    },
    filters: [
        {
            field: 'status',
            /* values need to be specified for ordering */
            values: ['operating','proposed','cancelled','shelved','closed','mothballed']
        },
        {
            field: 'type',
            label: 'Mine Type',
            values: ['surface','underground','underground_and_surface','refuse']
        },
        {
            field: 'coal_grade',
            values: ['thermal','met','thermal_and_met',''],
            /* value_labels must match order/number in values */
            values_labels: ['thermal','met','thermal and met','unknonwn']
        }
    ],
    context_layers: [
        {
            'label': 'Coal Fields',
            'tileset': '[mapbox tile url]',
            paint: {}
        }
    ],
    search_fields: ['name', 'country', 'company'] /* company could be owner, operator or parent, need to specify */

}