<?php

namespace App\Form\Type;

use Symfony\Component\Form\{AbstractType, FormBuilderInterface};
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\{NotBlank, Length, Choice, IsFalse};
use App\DTO\CompanyDTO;
use App\Entity\Company;
use App\Validator\Constraint\UniqueCompanyName;

class CompanyUpdatingType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, ['constraints' => [
                new NotBlank(),
                new Length(['max' => 100]),
                new UniqueCompanyName(['excludedValues' => [$options['currentName']]]),
            ]])
            ->add('code', null, ['constraints' => [
                new NotBlank(),
            ]])
            ->add('resource_type', null, ['constraints' => [
                new NotBlank(),
            ]])
            ->add('hydrocarbon_type', null, ['constraints' => [
                new NotBlank(),
            ]])
            ->add('land', null, ['constraints' => [

            ]])
            ->add('marine', null, ['constraints' => [

            ]])
            ->add('main_env', null, ['constraints' => [
                new NotBlank(),
            ]])
            ->add('country', null, ['constraints' => [

            ]])
            ->add('region', null, ['constraints' => [
                new NotBlank(),
            ]]);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => CompanyDTO::class,
            'csrf_protection' => false,
            'currentName' => null,
        ]);
    }
}
