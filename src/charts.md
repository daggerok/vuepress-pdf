# Charts

## Bar chart

```vue
<bar-chart :data="[
    ['Assignments', 10],
    ['Midterm', 35],
    ['Final', 55]]"
/>
```

<bar-chart :data="[
['Assignments', 10],
['Midterm', 35],
['Final', 55]]"
/>

## Pie chart

```vue
<pie-chart :data="[
    ['Assignments', 10],
    ['Midterm', 35],
    ['Final', 55]]"
/>
```

<pie-chart :data="[
['Assignments', 10],
['Midterm', 35],
['Final', 55]]"
/>

## Column chart

```vue
<column-chart :data="[
    ['Assignments', 10],
    ['Midterm', 35],
    ['Final', 55]]"
/>
```

<column-chart :data="[
['Assignments', 10],
['Midterm', 35],
['Final', 55]]"
/>

_another sample_

```vue
<column-chart :data="[
    ['Sun', 32],
    ['Mon', 46],
    ['Tue', 28],
]"/>
```

<column-chart :data="[
['Sun', 32],
['Mon', 46],
['Tue', 28],
]" />

## Area chart

```vue
<area-chart :data="[
    ['Assignments', 10],
    ['Midterm', 35],
    ['Final', 55]
]" />
```

<area-chart :data="[
['Assignments', 10],
['Midterm', 35],
['Final', 55]
]" />

_another sample_

```vue
<area-chart :data="{
    '2017-01-01': 11,
    '2017-01-02': 6,
    '2017-01-03': 7,
    '2017-01-04': 8,
    '2017-01-05': 3,
}" />
```

<area-chart :data="{
'2017-01-01': 11,
'2017-01-02': 6,
'2017-01-03': 7,
'2017-01-04': 8,
'2017-01-05': 3,
}" />

## Scatter chart

```vue
<scatter-chart
    xtitle="Size"
    ytitle="Population"
    :data="[
        [175.0, 80.0],
        [175.3, 60.1],
        [175.5, 55.2],
        [175.8, 42.4],
        [176.0, 38.3],
    ]"
/>
```

<scatter-chart
xtitle="Size"
ytitle="Population"
:data="[
[175.0, 80.0],
[175.3, 60.1],
[175.5, 55.2],
[175.8, 42.4],
[176.0, 38.3],
]"
/>

## Line chart

```vue
<line-chart :data="[
    { name: 'Workout',      data: { '2017-01-01': 3, '2017-01-02': 4 } },
    { name: 'Call parents', data: { '2017-01-01': 5, '2017-01-02': 3 } },
]" />
```

<line-chart :data="[
{ name: 'Workout',      data: { '2017-01-01': 3, '2017-01-02': 4 } },
{ name: 'Call parents', data: { '2017-01-01': 5, '2017-01-02': 3 } },
]" />
